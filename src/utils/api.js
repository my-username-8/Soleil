export async function dataRequest(data, type, endpoint, onsuccess, onfailure) {
  try {
    let res = await fetch(`${import.meta.env.VITE_API_URL}/${endpoint}`, {
      method: type,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await res.json();
    if (res.ok) {
      onsuccess(responseData);
    } else {
      onfailure(responseData.message);
    }
  } catch (err) {
    onfailure(err.message);
  }
}
