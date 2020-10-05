import { action, observable } from 'mobx';

class CommonStore {
    @observable isLoading = false;

    @action
    showLoader() {
        this.isLoading = true;
    }

    @action
    hideLoader() {
        this.isLoading = false;
    }
}

export default CommonStore;