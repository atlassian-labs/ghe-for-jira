// This could be snapshot
const appMeta = { mount: false };

export const isAppMount = () => { return appMeta.mount };

const markAppMount = () => {
    appMeta.mount = true;
}

export const onAppMount = (cb) => {
    if (!isAppMount()) {
        cb()
        markAppMount()
    }
};