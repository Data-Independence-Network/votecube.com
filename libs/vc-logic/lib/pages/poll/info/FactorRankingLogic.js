import { DI } from '@airport/di';
import { fly } from 'svelte/transition';
import { cardMove } from '../../../store';
import { FACTOR_RANKING_LOGIC } from '../../../tokens';
export class FactorRankingLogic {
    getFactorInfoAtCoords(x, y, factorNumberToExclude) {
        if (!x || !y) {
            return null;
        }
        let nodes;
        const msDoc = document;
        if (msDoc.msElementsFromPoint) {
            nodes = msDoc.msElementsFromPoint(x, y);
        }
        else {
            nodes = document.elementsFromPoint(x, y);
        }
        if (!nodes || !nodes.forEach) {
            return null;
        }
        let matchingFactorInfo = null;
        nodes.forEach(node => {
            const factorInfo = this.getFactorInfo(node);
            if (!matchingFactorInfo && factorInfo
                && factorInfo.factorNumber !== factorNumberToExclude) {
                matchingFactorInfo = factorInfo;
            }
        });
        return matchingFactorInfo;
    }
    getInElementOffset(event) {
        // event (directly for mouse/via touches[0] for touch)
        // 	pageX/Y gives the cursor position on screen at mouse/touchDown
        const cursorPositionX = event.pageX;
        const cursorPositionY = event.pageY;
        const factorInfoAtCoords = this.getFactorInfoAtCoords(cursorPositionX, cursorPositionY, -1);
        if (!factorInfoAtCoords) {
            return null;
        }
        // target (directly on event for mouse/via touches[0].target for touch)
        // 	has the information for the top left corner of the element:
        const boundingClientRect = event.target.getBoundingClientRect();
        const elemTopLeftCornerX = boundingClientRect.left;
        const elemTopLeftCornerY = boundingClientRect.top;
        // factorPosition places the element based on the top left corner
        // so need to know the offset by which to move the picture to top and left:
        return {
            topLeft: {
                x: elemTopLeftCornerX,
                y: elemTopLeftCornerY
            },
            x: cursorPositionX - elemTopLeftCornerX,
            y: cursorPositionY - elemTopLeftCornerY
        };
        // Whereever the cursor is at we need to substract the offsets from it
        // to show the element.
    }
    getAlternateIndex(absDy, dy, originalIndex, have3) {
        switch (originalIndex) {
            case 0: {
                if (dy > 0) {
                    if (absDy < 200) {
                        return 1;
                    }
                    else {
                        return have3 ? 2 : 1;
                    }
                }
                break;
            }
            case 1: {
                if (dy > 0) {
                    return 2;
                }
                else {
                    return 0;
                }
            }
            case 2: {
                if (dy < 0) {
                    if (absDy < 200) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
                break;
            }
        }
        return originalIndex;
    }
    addOrRemoveAFactor(voteFactors, index, addOrRemove, vote, logicUtils) {
        const [_, secondFactor, thirdFactor] = voteFactors;
        let numMoved = 0;
        let placeholder = false;
        if (index === 0) {
            if (
            // Cannot add the first factor
            addOrRemove === 'add'
                // Cannot remove the first factor if there are no other factors
                || (!secondFactor.outcome && !thirdFactor.outcome)) {
                return {
                    numMoved,
                    placeholder
                };
            }
            placeholder = true;
            // scheduleFactorPlaceholder()
            vote.changeMillis = 550;
            // Remove first factor
            this.removeFirstFactor(voteFactors, vote, !!thirdFactor.outcome, logicUtils);
            return {
                numMoved: 1,
                placeholder
            };
        }
        numMoved = 1;
        const outcome = voteFactors[index].outcome;
        if (addOrRemove === 'remove') {
            // remove
            if (!outcome) {
                // Don't remove if it's already removed
                return {
                    numMoved: 0,
                    placeholder,
                };
            }
            vote.changeMillis = 550;
            placeholder = true;
            // scheduleFactorPlaceholder(index, direction)
            if (index === 1 && thirdFactor.outcome) {
                this.onMove(1, [2, 1]);
                this.swapOnRemove(
                // voteFactors,
                vote, secondFactor, thirdFactor, null, 2, logicUtils);
                this.moveUpOne(1, logicUtils);
            }
            else {
                this.setOutcome(voteFactors, index, null);
                this.adjustRanking(voteFactors, index, null);
            }
        }
        else {
            // add
            if (outcome) {
                // Don't add if it's already added
                return {
                    numMoved: 0,
                    placeholder
                };
            }
            vote.changeMillis = 550;
            if (index === 2 && !secondFactor.outcome) {
                this.setOutcome(voteFactors, 1, 'A');
                this.adjustRanking(voteFactors, 1, 'A');
                numMoved = 2;
            }
            this.setOutcome(voteFactors, index, 'A');
            this.adjustRanking(voteFactors, index, 'A');
        }
        return {
            numMoved,
            placeholder
        };
    }
    move(index, options, logicUtils) {
        logicUtils.transition('factor_' + index, fly, options);
    }
    moveFactorDown(voteFactors, vote, originalIndex, newIndex, logicUtils) {
        switch (originalIndex) {
            // Started the move from 1st Factor
            case 0: {
                if (newIndex === 1) {
                    this.onMove(1, [0, 1]);
                    vote.changeMillis = 200;
                    this.setFactorOrder(voteFactors, originalIndex, -1, vote, logicUtils);
                    this.moveUpOne(0, logicUtils);
                }
                else {
                    this.onMove(2, [0, 2]);
                    vote.changeMillis = 600;
                    this.setFactorOrder(voteFactors, originalIndex, -1, vote, logicUtils, voteFactors[0], voteFactors[2], 0);
                    this.moveUpTwo(0, logicUtils);
                }
                return true;
            }
            // Started the move from 2nd Factor
            case 1: {
                this.onMove(1, [1, 2]);
                vote.changeMillis = 200;
                this.setFactorOrder(voteFactors, originalIndex, -1, vote, logicUtils);
                this.moveUpOne(1, logicUtils);
                return true;
            }
            // Started the move from 3rd Factor
            // case 2: {
            // Not possible, nothing to do
            // return
            // }
        }
        return false;
    }
    moveFactorUp(voteFactors, vote, originalIndex, newIndex, logicUtils) {
        switch (originalIndex) {
            // Started the move from 1st Factor
            // case 0: {
            // 	// Not possible, nothing to do
            // 	return
            // }
            // Started the move from 2nd Factor
            case 1: {
                this.onMove(1, [1, 0]);
                vote.changeMillis = 200;
                this.setFactorOrder(voteFactors, originalIndex, 1, vote, logicUtils);
                this.moveDownOne(1, logicUtils);
                return true;
            }
            // Started the move from 3rd Factor
            case 2: {
                if (newIndex === 1) {
                    this.onMove(1, [2, 1]);
                    vote.changeMillis = 200;
                    this.setFactorOrder(voteFactors, originalIndex, 1, vote, logicUtils);
                    this.moveDownOne(2, logicUtils);
                }
                else {
                    this.onMove(2, [2, 0]);
                    vote.changeMillis = 600;
                    this.setFactorOrder(voteFactors, originalIndex, 1, vote, logicUtils, voteFactors[0], voteFactors[2], 0);
                    this.moveDownTwo(2, logicUtils);
                }
                return true;
            }
        }
        return false;
    }
    setOutcome(voteFactors, index, outcome) {
        voteFactors[index].outcome = outcome;
        // if (adjustRanking) {
        // 	dispatch('rankingAdjusted')
        // }
    }
    adjustRanking(voteFactors, index, outcome) {
        const [firstVoteFactor, secondVoteFactor, thirdVoteFactor] = voteFactors;
        switch (index) {
            case 0: {
                // firstFactor.dir = dir
                // Don't have to worry about dir === 0 - 1st factor cannot have it as such
                if (
                // If there the 1st factor is present in vote
                this.factorsAt(100, 0, 0, voteFactors)
                    // Or its another standard distribution
                    || this.factorsAt(66, 34, 0, voteFactors)
                    || this.factorsAt(55, 30, 15, voteFactors)) {
                    // Nothing to do, just change direction
                }
                else {
                    // set default distribution
                    firstVoteFactor.value = 55;
                    secondVoteFactor.value = 30;
                    thirdVoteFactor.value = 15;
                }
                break;
            }
            case 1: {
                // secondFactor.dir = dir
                // If the 2nd factor is being removed from the vote
                if (!outcome) {
                    firstVoteFactor.value = 100;
                    secondVoteFactor.value = 0;
                    thirdVoteFactor.value = 0;
                    // thirdFactor.dir    = 0
                    break;
                }
                // Otherwise the 2nd factor is now present in the vote
                if (this.factorsAt(55, 30, 15, voteFactors)
                    || this.factorsAt(66, 34, 0, voteFactors)) {
                    // Factors are already at reserved values, no need to adjust values
                }
                else if (this.factorsAt(100, 0, 0, voteFactors)) {
                    // Add the second factor
                    firstVoteFactor.value = 66;
                    secondVoteFactor.value = 34;
                }
                else {
                    // set default distribution
                    firstVoteFactor.value = 55;
                    secondVoteFactor.value = 30;
                    thirdVoteFactor.value = 15;
                }
                break;
            }
            case 2: {
                // If the 3rd factor is being removed from the vote
                if (!outcome) {
                    firstVoteFactor.value = 66;
                    secondVoteFactor.value = 34;
                    thirdVoteFactor.value = 0;
                    break;
                }
                // Otherwise the 3rd factor is now present in the vote
                if (this.factorsAt(55, 30, 15, voteFactors)) {
                    // Factors are already at reserved values, no need to adjust values
                }
                else {
                    // set default distribution
                    firstVoteFactor.value = 55;
                    secondVoteFactor.value = 30;
                    thirdVoteFactor.value = 15;
                }
                break;
            }
            default:
                return false;
        }
        return true;
        // if (doAdjust) {
        // 	dispatch('rankingAdjusted')
        // }
    }
    swapOnRemove(
    // voteFactors,
    vote, removedFactor, movedFactor1, movedFactor2, adjustRankingIndex, logicUtils) {
        if (movedFactor2) {
            movedFactor2.value = movedFactor1.value;
        }
        movedFactor1.value = removedFactor.value;
        removedFactor.value = 0;
        removedFactor.outcome = null;
        // page.set({factorOrderDelta: page.get().factorOrderDelta + 1})
        if (!adjustRankingIndex) {
            adjustRankingIndex = movedFactor2 ? 2 : 1;
        }
        this.adjustRanking(logicUtils.getVoteFactorNodesInValueOrder(vote), adjustRankingIndex, null);
    }
    removeFirstFactor(voteFactors, vote, move3, logicUtils) {
        if (move3) {
            this.onMove(1, [2, 1, 0]);
        }
        else {
            this.onMove(1, [1, 0]);
        }
        const [firstFactor, secondFactor, thirdFactor] = voteFactors;
        this.swapOnRemove(
        // voteFactors,
        vote, firstFactor, secondFactor, move3 ? thirdFactor : null, 0, logicUtils);
        if (move3) {
            this.moveUpOne(1, logicUtils);
        }
        this.moveUpOne(0, logicUtils);
    }
    setFactorOrder(voteFactors, index, delta, vote, logicUtils, oldHigherFactor, oldLowerFactor, deltaIndex) {
        const [firstVoteFactor, secondVoteFactor, thirdVoteFactor] = voteFactors;
        let oldHigherOutcome;
        let oldHigherValue;
        if (!oldHigherFactor) {
            switch (index) {
                case 0: {
                    // Only Down arrow can be pressed, no need to check delta
                    deltaIndex = 0;
                    oldHigherFactor = firstVoteFactor;
                    oldLowerFactor = secondVoteFactor;
                    break;
                }
                case 1: {
                    if (delta > 0) {
                        deltaIndex = 0;
                        oldHigherFactor = firstVoteFactor;
                        oldLowerFactor = secondVoteFactor;
                    }
                    else {
                        deltaIndex = 1;
                        oldHigherFactor = secondVoteFactor;
                        oldLowerFactor = thirdVoteFactor;
                    }
                    break;
                }
                case 2: {
                    // Only Up arrow can be pressed, no need to check delta
                    deltaIndex = 1;
                    oldHigherFactor = secondVoteFactor;
                    oldLowerFactor = thirdVoteFactor;
                    break;
                }
            }
        }
        oldHigherOutcome = oldHigherFactor.outcome;
        oldHigherValue = oldHigherFactor.value;
        oldHigherFactor.value = oldLowerFactor.value;
        oldLowerFactor.value = oldHigherValue;
        // page.set({factorOrderDelta: page.get().factorOrderDelta + 1})
        return this.adjustRanking(logicUtils.getVoteFactorNodesInValueOrder(vote), deltaIndex, oldHigherOutcome);
    }
    onMove(move, moved) {
        cardMove.set({
            move,
            moved
        });
    }
    moveDownOne(index, logicUtils, duration = 400) {
        this.move(index, { y: -100, duration }, logicUtils);
    }
    moveDownTwo(index, logicUtils) {
        this.move(index, { y: -200, duration: 800 }, logicUtils);
    }
    moveUpOne(index, logicUtils, duration = 400) {
        this.move(index, { y: 100, duration }, logicUtils);
    }
    moveUpTwo(index, logicUtils) {
        this.move(index, { y: 200, duration: 800 }, logicUtils);
    }
    factorsAt(firstFactorValue, secondFactorValue, thirdFactorValue, voteFactors) {
        return voteFactors[0].value === firstFactorValue
            && voteFactors[1].value === secondFactorValue
            && voteFactors[2].value === thirdFactorValue;
    }
    getFactorInfo(node) {
        if (!node) {
            return null;
        }
        while (node.getAttribute
            && !node.getAttribute('factorNumber')
            && node.parentNode) {
            node = node.parentNode;
        }
        if (node.getAttribute
            && node.getAttribute('factorNumber')) {
            return {
                factorNumber: parseInt(node.getAttribute('factorNumber')),
                factorTd: node
            };
        }
        return null;
    }
}
DI.set(FACTOR_RANKING_LOGIC, FactorRankingLogic);
//# sourceMappingURL=FactorRankingLogic.js.map