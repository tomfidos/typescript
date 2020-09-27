import { GetData } from './getDataFromApi';

const requestsPerMinuteInTierOne = 10;

export async function updateDatabase() {
    const GetDataFromApi = new GetData();
    const competitions = await GetDataFromApi.getAvailableCompetitions('ca0ed65208bb4bce95f53ab0941bb994');
    asyncForEach(competitions, async (competition: any) => {
        await new Promise(resolve => setTimeout(resolve, 60000 / requestsPerMinuteInTierOne));
        const matches =
            await GetDataFromApi.getCompetitionNewMatches(
                competition, 
                GetDataFromApi.getLastUpdate(),
                'ca0ed65208bb4bce95f53ab0941bb994'
            );
        console.log(matches);
    });
}

async function asyncForEach(array: {}[], callback: any) {
    for (let i = 0; i < array.length; i++) {
        await callback(array[i]);
    }
}
