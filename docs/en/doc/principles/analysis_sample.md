# Short-term scene analysis <Badge type="tip" text="Standard" />

This page describes an example analysis sequence for a specific scene over a relatively short period of time.

## Example 1: I want to graph the number of steps taken on a weekday.

Generally, most people spend their weekdays in the following cycle: get up, go to work, work, go home, free time, go to bed. Let's graph the number of steps taken for those who are concerned about lack of exercise.

### Data type

Although both 15-second and 60-second intervals can be used, we will use 60-second interval data that has been summarized to some extent.

### Preprocessing

- wea_s >= 30 (out of 60 seconds, 30 seconds is true for the attachment flag, sometimes the flag is raised at rest, so filter around 50%)
- tl_xav > -45, tl_xav < 45, tl_yav > -45, tl_yav < 90 (if the angle is not the angle at which the glasses are normally worn, filter because they may be stored without being worn)

### Grouping

- Period to summarize: 15 minute intervals for detailed recall of actions, 60 minute intervals for ease of viewing
- Aggregate function: sum(stp_fst + stp_mid + stp_slw + stp_vsl)

## Example 2: I want to visualize the degree of concentration during a workday.

We often have subjective impressions such as "I got a lot done today," or "I couldn't concentrate for some reason". Let's look back the day objectively by looking at the actual data.

### Data type

We recommend using 15-second interval data for indicators such as concentration.

### Preprocessing

- isl == false (when in the wearing state)
- vld == true (use only data when blink-related measurement accuracy is sufficient)
- tl_xav > -45, tl_xav < 45, tl_yav > -45, tl_yav < 90 (If the angle is not the angle at which the spectacles are normally worn, filter the data as they may be stored in a bag or something)

### Grouping

- Period to summarize: 10-minute intervals for mental indicators, because the data can be difficult to understand if the swings of increase/decrease are too large and too frequent.
- Aggregation function: mean(sc_fcs), or sum(sc_fcs >= 60 ? 1 : 0)/sum(sc_fcs ! = null ? 1 : 0) (take the mean or the rate of the high interval)

## Example 3: I want to compare the pitch (number of steps per minute) of various people.

There is an legend that "a person who walks fast is a good worker". To confirm this legend, let's calculate the average pitch of the person.

### Data type

Although both 15-second and 60-second intervals can be used, we will use the 60-second interval data that has been summarized to some extent.

### Preprocessing

In order to keep only the data from the continuous walking, we will exclude other conditions.

- stp_s >= 50 (we want to extract only the person's normal walking condition (we want to remove the data from the person who just wandered around the room for a bit), so only the data where the person walked for more than 50 seconds)
- tl_xav > -45, tl_xav < 45, tl_yav > -45, tl_yav < 45 (If the angle is not the angle at which the person normally wears glasses, we filter out the data because it may be stored without being worn)

### Grouping

- Period to summarize: per user
- Aggregate function: mean((stp_fst + stp_mid + stp_slw + stp_vsl) * 60 / stp_s) (multiply the total number of steps in those 60 seconds by the rate of seconds walked)