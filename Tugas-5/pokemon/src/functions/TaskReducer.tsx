export default function taskReducer(data: any, action: any) {
    switch (action.type) {
        case 'sort': {
            switch (action.text) {
                case '1':
                    return [...data].sort((a, b) => a.number.localeCompare(b.number));
                case '2':
                    return [...data].sort((a, b) => b.number.localeCompare(a.number));
                case '3':
                    return [...data].sort((a, b) => a.name.localeCompare(b.name));
                case '4':
                    return [...data].sort((a, b) => b.name.localeCompare(a.name));
                default: {
                    throw Error('Unknown action: ' + action.type);
                }
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}