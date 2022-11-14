def cross_zero(m):
    row_zero = {}
    column_zero = {}

    i = 0
    while i < len(m):
        j = 0

        while j < len(m[i]):
            if m[i][j] == 0 and (row_zero.get(i) or column_zero.get(j)):
                j += 1
                continue

            if m[i][j] == 0:
                row_zero[i] = True
                column_zero[j] = True

                ii = 0
                while ii < len(m[i]):
                    print(f'{ii}')
                    m[i][ii] = 0
                    ii += 1

                jj = 0
                while jj < len(m[i]):
                    m[jj][j] = 0
                    jj += 1

            j += 1

        i += 1

    print(row_zero)
    print(column_zero)

    return m


matrix = [
    [0, 2, 3, 4, 5],
    [6, 7, 8, 0, 1],
    [1, 3, 4, 5, 0],
    [6, 0, 8, 9, 1],
    [6, 7, 8, 0, 1],
]

print(f'Initial matrix {matrix}')

print(f'Converted matrix {cross_zero(matrix)}')
