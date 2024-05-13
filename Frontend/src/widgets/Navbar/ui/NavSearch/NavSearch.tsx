import { Icon } from "@/shared/ui/Icon/Icon";
import { Text } from "@/shared/ui/Text/Text";
import cls from "./NavSearch.module.scss";
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import {
  getProfileUser,
  getSearchLoading,
  getSearchUsers,
  profileActions,
  searchUsers,
} from "@/entities/Profile";
import { useSelector } from "react-redux";
import { HStack, Spinner, UserCard, VStack } from "@/shared/ui";
import { Spin } from "antd";
import { debounce } from "lodash-es";

export const NavSearch = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const searchLoading = useSelector(getSearchLoading);
  const users = useSelector(getSearchUsers);

  const onSearchUsers = useMemo(
    () =>
      debounce(async (query) => {
        dispatch(searchUsers({ search: query }));
      }, 800),
    []
  );

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onSearchUsers(value);
    setSearch(e.currentTarget.value);
  };

  const onClearSearch = useCallback(() => {
    setSearch("");
    dispatch(profileActions.setSearchUsers());
  }, []);

  return (
    <div className={cls.search}>
      <input type="text" onChange={onChangeSearch} />
      {!search ? (
        <div className={cls.text}>
          <Icon type="Search" />
          <Text color="gray" tag="span" weight={200}>
            Search
          </Text>
        </div>
      ) : (
        <span className={cls.close} onClick={onClearSearch}>
          &times;
        </span>
      )}

      {search && (
        <HStack className={cls.list} align="center" justify="center">
          {users.length > 0 && !searchLoading ? (
            <VStack>
              {users.map((user) => (
                <UserCard
                  id={user._id}
                  key={user._id}
                  onclick={onClearSearch}
                  title={user.fullname}
                  content={`@${user.username}`}
                  src={user.avatar}
                />
              ))}
            </VStack>
          ) : search && !searchLoading ? (
            <Text>Ничего не найдено</Text>
          ) : (
            searchLoading && <Spin size="large" />
          )}
        </HStack>
      )}
    </div>
  );
};
