import { lzLogin } from 'lz';

const state = {
  tipString: ''
}

export function login(username: string, password: string) {
  lzLogin(username, password)
}

export function loginV2(username: string,password: string){
  const isLogin = lzLogin(username, password)

  if(isLogin){
    state.tipString = 'success'
  }
}

export const getTip = () => {
  return state.tipString;
};

