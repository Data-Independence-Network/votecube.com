<script lang="ts">
    import { DEPENDENCY_INJECTION, IChildContainer } from "@airport/direction-indicator";
    import { FormFactory, IFieldGroup, IMatchingField } from "@votecube/forms";
    import { pageTitle, routeParams, text } from "@votecube/ui-logic";
    import TextArea from "@votecube/ui-controls/src/field/TextArea.svelte";
    import { onDestroy, onMount } from "svelte";
    import { get } from "svelte/store";
    import ForumPost from "./ForumPost.svelte";

    let container: IChildContainer;
    let delta = 0;
    let error = "";
    let form: IFieldGroup;
    let isOriginal = true;
    let isValid = false;

    let field: IMatchingField = form.fields.post as IMatchingField

    let formHandle = {
        setDelta(newDelta) {
            delta = newDelta;
        },
        setIsValid(newIsValid) {
            isValid = newIsValid;
        },
        setIsOriginal(newIsOriginal) {
            isOriginal = newIsOriginal;
        },
    };

    async function loadThread(
        forumRepositorySource: string,
        forumRepositoryUuId: string
    ): Promise<any> {
        
    }

    function ensureForm(form, formHandle) {
        form.addComponent(formHandle);
        formHandle.setIsOriginal(form.isOriginal());
        formHandle.setIsValid(form.valid);
    }

    onMount(async () => {
        container = DEPENDENCY_INJECTION.ui("ForumThread");

        const { forumRepositorySource, forumRepositoryUuId } = get(routeParams);
        let [forumThread, formsModule] = await Promise.all([
            loadThread(forumRepositorySource, forumRepositoryUuId),
            import("@votecube/forms"),
        ]);

        const formFactory = await container.get(FormFactory);

        form = formFactory.group(
            "Forum",
            {
                post: formFactory.field([]),
            },
            [],
            get(text).UI
        );

        ensureForm(form, formHandle);

        pageTitle.set("Ideas");
    });

    onDestroy(() => {
        form && form.clearComponents();
    });
</script>

<div>This is a Thread</div>
<ForumPost />
<ForumPost />
<ForumPost />
<ForumPost />
<ForumPost />

{#if form}
    <TextArea
        {field}
        floatLabel={false}
        mid={false}
        mini={false}
    />
{:else}
    <div>No form found</div>
{/if}

<style>
</style>
