import { AbstractService } from './abstract.service';

export class GithubService extends AbstractService {
    constructor() {
        super("https://api.github.com/users?");
    }

    search(number) {
        console.log(number);
        return super.search({
            per_page: number, // the user's search value
            format: "json"
        });
    }
}