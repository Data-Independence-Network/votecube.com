{
  "UI": {
    "Poll": {
      "Create": {
        "NameLocationDates": {
          "name": {
            "label": "Poll Name",
            "errors": {
              "minLength": "Poll Name must be at least 3 characters long",
              "required": "Poll Name is required"
            }
          },
          "location": {
            "errors": {
              "required": "Poll Location is required"
            }
          },
          "timeframe": {
            "errors": {
              "required": "Poll Time Frame is Required"
            }
          }
        },
        "Location": {
          "continents": {
            "label": "Continent(s)",
            "errors": {
              "required": "Continent is required"
            }
          },
          "countries": {
            "label": "Country(ies)"
          },
          "states": {
            "label": "State(s)"
          },
          "cities": {
            "label": "City(ies)"
          }
        },
        "Dates": {
          "startDate": {
            "label": "Start Date",
            "errors": {
              "required": "Start Date is required",
              "format": "Start Date is invalid",
              "min": "Start Date must be greater than today"
            }
          },
          "endDate": {
            "label": "End Date",
            "errors": {
              "required": "End Date is required",
              "format": "End Date is invalid",
              "min": "End Date must be greater than today",
              "range": "End Date must be on or after Start Date"
            }
          }
        }
      }
    },
    "Common": {
      "Field": {
        "Datepicker": {
          "month": {
            "0": "January",
            "1": "February",
            "2": "March",
            "3": "April",
            "4": "May",
            "5": "June",
            "6": "July",
            "7": "August",
            "8": "September",
            "9": "October",
            "10": "November",
            "11": "December"
          },
          "weekDayOrder": [
            0,
            1,
            2,
            3,
            4,
            5,
            6
          ],
          "shortWeekDay": {
            "0": "Su",
            "1": "Mo",
            "2": "Tu",
            "3": "We",
            "4": "Th",
            "5": "Fr",
            "6": "Sa"
          },
          "dateInput": {
            "placeholder": {
              "month": " M",
              "date": " D",
              "year": "YYYY"
            },
            "separator": "/"
          }
        }
      }
    }
  }
}