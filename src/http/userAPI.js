import { $authHost, $host } from ".";

export const registration = async (email, password) => {
  const response = await $host.post("api/user/register", {
    email,
    password,
    role: "ADMIN",
  });
  return response;
};
export const login = async (email, password) => {
  const response = await $host.post("api/user/login", { email, password });
  return response;
};
export const check = async () => {
  const response = await $host.post("api/post/auth/register", );
  return response;
};
