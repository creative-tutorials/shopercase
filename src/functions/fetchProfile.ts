// Make changes to this file with caution. This file contains required information needed for some features of the application to work properly
/**
 * It returns a promise that resolves to a console.log statement.
 * @returns A promise.
 */
export async function fetchUserProfileDdata(setusername: any, setuserBio: any) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
    });
    if (res.ok) {
      const result = await res.json();
      setusername(result[0].title);
      setuserBio(result[1].title);
    }
  } catch (error) {
    setusername("Failed to load data, please try again!");
    setuserBio("Failed to load data, please try again!");
    console.log(error);
  }
}
