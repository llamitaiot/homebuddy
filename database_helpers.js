export const all = (db, table, callback) => {
    const query = "select * from " + table
    var xs = []
    var errs = []
    db.each(query, (e, x) => {
        if (e == null) { 
            xs.push(x)
        } else {
            errs.push(e)
        }
    })

    if (callback) {
        callback(xs, errs)
        return
    } else {
        return xs
    }
}