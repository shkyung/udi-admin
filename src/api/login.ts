export const login = async ({ username, password }: { username: string; password: string }) => {
  const url = `https://udi-backend-dev.lunit.io/users/login`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(`Auth Error Status with ${res.status}`);
      }
      return res.json();
    })
    .then(({ accessToken }) => {
      localStorage.setItem('accessToken', accessToken);
    })
    .catch((e) => Promise.reject(e));
};
