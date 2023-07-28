import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// 페이지 변경시 상태 관리 유지
const { persistAtom } = recoilPersist();

export const LoginState = atom<boolean>({
  key: "LoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
