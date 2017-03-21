import $ from 'jquery';
import _ from 'lodash';
import { AbstractSearchComponent } from './abstract-search.component';
import { GithubService } from './github.service';

export class GithubComponent extends AbstractSearchComponent {
    constructor(jqElemSelector) {
        super('github', jqElemSelector, new GithubService(), 25, 'ol');
    }

    getCollection(data) { // overriden from super
        return data;
    }

    addItem(i, item) {
        let aElem = $('<a>').attr({
            'title': item.login,
            'href': item.html_url,
            'target': '_blank'
        }).html(item.login);
        let iElem = $('<img>').attr('src', item.avatar_url);
        let liElem = $('<li>').append(aElem);
        return $($('<div>').append(liElem)).append(iElem);
    }
}