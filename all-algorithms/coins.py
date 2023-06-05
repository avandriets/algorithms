def solve_coin_change(denominations, amount):
    solution = [0] * (amount + 1)
    solution[0] = 1
    for den in denominations:
        print(f'den {den}')
        for i in range(den, amount + 1):
            solution[i] += solution[i - den]

            print(f'position {i} {i - den}')
            print(solution)

    return solution[len(solution) - 1]


coins = [1, 3, 5]
target_summa = 6

print(f'Find possible combinations')
print(solve_coin_change(coins, target_summa))
