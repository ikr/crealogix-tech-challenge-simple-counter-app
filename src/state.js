export function initial () {
    return {series: [0]}
}

export function reduce (db, action) {
    if (!db) {
        return initial()
    }

    const series = db.series.slice()
    const currentValue = series[series.length - 1]

    switch (action.type) {
    case 'PLUS':
        series.push(currentValue + 1)
        break

    case 'MINUS':
        if (currentValue > 0) {
            series.push(currentValue - 1)
        }

        break
    }

    return {series}
}

export function currentValue (db) {
    return db.series[db.series.length - 1]
}
