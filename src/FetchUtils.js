export const get = (url) => {
    const authHeader = 'Bearer - Token';

    let myHeaders = new Headers();
    myHeaders.append('Authorization', authHeader);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    return (
      fetch(url, requestOptions)
        .then(function (response) {
          if (response.status !== 200) {
            console.error(`Unknown resolvable issue encountered, status Code: ${response.status}`);
            return;
          }

          // Examine the text in the response
          const returnedResponse = response.json().then(function (data) {
            return data;
          });

          return returnedResponse;
      })
    )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
};
