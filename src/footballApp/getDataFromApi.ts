import * as moment from 'moment';
import * as fetch from 'isomorphic-fetch';

export class GetData {
    private startDate: moment.Moment;

    constructor() {
        this.startDate = moment.utc();
    }

    getLastUpdate(): moment.Moment {
        let fromDate = this.startDate;
        return fromDate;
    }

    async getAvailableCompetitions(token: string): Promise<{}[]> {
        const availableCompetitionsResponse =
            await fetch(
                'https://api.football-data.org/v2/competitions/?plan=TIER_ONE', 
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-Auth-Token': token
                    }
                }
            );
        return (await availableCompetitionsResponse.json()).competitions;
    }
    
    async getCompetitionNewMatches(competition: string, startDate: moment.Moment, token: string): Promise<{}[]> {
        const competitionMatches =
            await fetch(
                'https://api.football-data.org/v2/competitions/' + competition +
                '/matches?season=' + startDate.format('YYYY'),
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-Auth-Token': token
                    }
                }
            );
        return (await competitionMatches.json()).matches;
    }

}
