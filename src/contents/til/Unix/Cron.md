When setting Cron schedule, it’s important to understand what field means

Format: `([Second]) [Minute] [Hour] [Day of Month] [Month] [Day of Week]`

The `Second` part depends on the software, but it usually start at the `Minute` format.

So, when setting up in the unix command it will be:

```bash
minute hour day_of_month month day_of_week command_to_execute
```

In each field, we can have a regular number or a special characters that define the schedule:

- `*` A wild card that matches every number possible
- `-` Depict an **inclusive** range
- `,` Use for listing value (use as **OR** condition)
- `/` Step value: Will match when modulo equal $0$
    - Ex. `*/3` means any number that can divided by $3$ such as $0,3,6, \dots, 57$

For example, we can set

```bash
0 0 * * 0 /root/backup.sh
```

To run [`backup.sh`](http://backup.sh) every week on Sunday at midnight.