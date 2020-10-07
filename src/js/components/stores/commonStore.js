import { action, observable } from 'mobx';

class CommonStore {
    @observable isLoading = true;

    @action
    showLoader() {
        this.isLoading = true;
    }

    @action
    hideLoader() {
        this.isLoading = false;
    }
}

export default new CommonStore();