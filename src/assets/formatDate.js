export function formatDate(date, rule = 1) {
        if(rule === 1) {
                let d = new Date(date)
                return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " +
                    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
        } else if(rule === 2) {
                let d = new Date(date)
                return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
        }
}
