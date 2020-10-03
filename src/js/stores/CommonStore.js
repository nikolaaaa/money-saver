import { observable } from 'mobx';

class CommonStore {
    @observable isLoading = false;
}

export default CommonStore;