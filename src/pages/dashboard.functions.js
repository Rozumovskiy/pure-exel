import {storage} from '@core/utils';

function toHTML(i) {
    const unixTimestamp = i.split(':')[1];
    const {title, openedDate} = storage(i);

    return `
        <li class="db_record">
            <a href="/#excel/${unixTimestamp}">${title}</a>
            <strong>
                ${new Date(openedDate).toLocaleDateString()}
                ${new Date(openedDate).toLocaleTimeString()}
            </strong>
        </li>`;
}

function getAllKeys() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.includes('excel')) {
            continue
        }
        keys.push(key);
    }
    return keys;
}

export function createRecordsTable() {
    const keys = getAllKeys();

    if (keys.length == 0) {
        return `<p>You didn't create any one table</p>`;
    }

    return `
        <div class="db_list-header">
            <span>Table name</span>
            <span>Date open</span>
        </div>

        <ul class="db_list">
            ${keys.map(toHTML).join('')}
        </ul>
    `;
}

