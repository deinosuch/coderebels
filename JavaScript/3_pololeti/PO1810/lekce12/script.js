let cisla = [1, 5, 234, 756, 23, 812, 0, -12, -53645]

function double(value) {
    return value*2
}

function enumerate(value, index, array) {
    return [array[index], value]
}

const cisla_krat_2 = cisla.map(double)

const cisla_s_index = cisla_krat_2.map(enumerate)

function is_even(value) {
    return value % 2 == 0
}

const suda_cisla = cisla.filter(is_even)