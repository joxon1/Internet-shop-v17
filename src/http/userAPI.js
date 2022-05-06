import { $authHost, $host } from ".";

export const registration = async (number,name, password) => {
  const response = await $host.post("api/user/register", {
    number,
    name,
    password,
  });
  return response;
};
export const login = async (email, password) => {
  const response = await $host.post("api/user/register/login", { email, password });
  return response;
};
export const check = async () => {
  const response = await $host.post("api/user/register/");
  return response;
};
