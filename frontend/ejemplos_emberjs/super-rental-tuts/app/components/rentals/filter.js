import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
    get results() {
        let { rentals, query }=this.args;

        if (query) {
            // default filter
            // rentals=rentals.filter((rental) => rental.title.includes(query));
            // filter no case sensitive
            rentals=rentals.filter((rental) => new RegExp(query, 'i').test(rental.title));
            // easiest aproach
            // rentals=rentals.filter((rental) => rental.title.toLowerCase().includes(query.toLowerCase()))
        }

        return rentals;
    }
}