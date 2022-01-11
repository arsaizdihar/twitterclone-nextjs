import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMeQuery } from "../../generated/graphql";
import { getUser, setUser, User } from "../../redux/slices/userSlice";

const useUser = (redirect = true) => {
  const user = useSelector(getUser);
  const router = useRouter();
  const { data, loading } = useMeQuery();
  // const [{ data, fetching }] = useMeQuery({
  //   pause: isServer(),
  // });
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loading) {
      if (data?.me) {
        dispatch(setUser(data.me as User));
      } else if (redirect) {
        router.push("/auth/login");
      }
    }
  }, [loading, data, dispatch, redirect, router]);
  return { user, loading };
};

export default useUser;
