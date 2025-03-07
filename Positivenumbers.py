def print_positive_numbers(lst):
    positive_nums = [num for num in lst if num > 0]
    return positive_nums

# Example usage
list1 = [12, -7, 5, 64, -14]
list2 = [12, 14, -95, 3]

print("Output:", ", ".join(map(str, print_positive_numbers(list1))))
print("Output:", print_positive_numbers(list2))
