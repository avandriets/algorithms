def nod_sub(a, b):
    print(f'div a = {a} b = {b}')

    a1 = b
    b1 = a - b

    if a < b:
        a1 = a
        b1 = b - a

    if a1 == b1:
        return a1
    else:
        return nod_sub(a1, b1)


def nod_div(a, b):
    a1 = max(a, b)
    b1 = min(a, b)

    res = a1 % b1

    if res == 0:
        return a1
    else:
        return nod_div(b1, res)


num1 = 9
num2 = 24

print(f' nod sub of {num1} and {num2} is {nod_sub(num1, num2)}')
print(f' nod div of {num1} and {num2} is {nod_div(num1, num2)}')
