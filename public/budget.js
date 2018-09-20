class Budget {
    constructor() {
        let self = this
        this.name = 'Budget'

        let page = document.createElement('div')
        this.page = page
        page.classList.add('content')

        let group = document.createElement('div')
        group.classList.add('input-group')

        let form = new Map()
        this.form = form

        for (let i = 0; i < 10; i++) {
            new BudgetItem(group, form, '#' + i, '#' + 1, '')
        }

        page.appendChild(group)
        
        let call = function(data) {
            let store = Pack.Parse(data)
            if (store['error']) {
                console.log(`error ${store['error']}`)
                return
            }
            for (let key in self.form) {
                if (store[key]) {
                    self.form[key].input.value = store[key]
                }
            }
        }
        let data = `req:get-budget|user:${user.name}|ticket:${user.ticket}|`
        Network.Request(data, call)
    }
}

class BudgetItem extends Field {

}