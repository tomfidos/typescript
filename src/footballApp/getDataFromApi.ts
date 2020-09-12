import * as moment from 'moment';

export class GetData {
    private startDate: moment.Moment;

    constructor() {
        this.startDate = moment.utc();
    }

    getLastUpdate(): moment.Moment {
        let fromDate = this.startDate;
        return fromDate;
    }

    getAvailableCompetitions(token: string): {}[] {
        const availableCompetitions = [];
        return availableCompetitions;
    }
    
    getCompetitionNewMatches(competition: string): {}[] {
        const matches = [];
        return matches;
    }

    getCompetitionMatchesResults(competition: string): {}[] {
        const matches = [];
        return matches;
    }

}
