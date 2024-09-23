"""Python application for The Constructive Cost Model"""
class Cocomo(object):
  """The Constructive Cost Model"""
  @staticmethod
  def calculate(table: list[list[float]], size: int) -> None:
    model = 0
    # Check the mode according to size
    if 2 <= size <= 50:
      model = 0
      print("The mode is Organic")
    elif 50 < size <= 300:
      model = 1
      print("The mode is Semi-Detached")
    elif size > 300:
      model = 2
      print("The mode is Embedded")

    # Calculate Effort
    effort = table[model][0] * pow(size, table[model][1])

    # Calculate Time
    time = table[model][2] * pow(effort, table[model][3])

    # Calculate Persons Required
    staff = effort / time

    # Output the values calculated
    print(f"Effort = {round(effort)} Person-Month.")
    print(f"Development Time = {round(time)} Months.")
    print(f"Average Staff Required = {round(staff)} Persons")
