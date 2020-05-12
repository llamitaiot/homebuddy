import DBHelper from './database_helpers'

const table_name = "reminders_activity"

function create_reminder_activity(text) {
    return {"description": text}
}

function insert_reminder_activity(activity, db) {

}

function all_reminder_activities(db) {
    const query = "select * from " + table_name
    var x = []
    db.each(query, (e, r) => x.push(r))
    return x
}

export const all = (app, req, res) => {
    const xs = all_reminder_activities(app.homebuddy.database)
    res.send(xs)
}