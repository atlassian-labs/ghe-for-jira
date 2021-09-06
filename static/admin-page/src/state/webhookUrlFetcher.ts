import { createStore, createSubscriber, createHook } from 'react-sweet-state';
import {invoke} from "@forge/bridge";

const Store = createStore({
    // value of the store on initialisation
    initialState: {
        pushWebTriggerUrl: "",
        prWebTriggerUrl: "",
        branchWebTriggerUrl: ""
    },
    // actions that trigger store mutation
    actions: {
        fetchUrls: () => async ({ setState, getState }) => {
            // mutate state synchronously
            setState({
                pushWebTriggerUrl: await fetchWebhookUrl("push-webhook-receiver"),
                prWebTriggerUrl: await fetchWebhookUrl("pr-webhook-receiver"),
                branchWebTriggerUrl: await fetchWebhookUrl("branch-webhook-receiver")
            });
        },
    },
    // optional, mostly used for easy debugging
    name: 'counter',
});

const fetchWebhookUrl = async (webhookKey: string): Promise<string> => {
    return invoke("fetchWebhookUrl", { key: webhookKey }).then((returnedData: WebhookUrlResponse) => {
        return returnedData.url;
    }).then( url => { return url; })
}

export const useWebHookUrlFetcher = createHook(Store);