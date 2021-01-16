import {settingsReducer} from "./Settings/settingsReducer";


export const rootReducer = {
    setting: settingsReducer,
    users: () => ({}),
}
