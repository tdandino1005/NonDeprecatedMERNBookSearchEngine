const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";

export const index = async (q) => {
  const response = await fetch(BASE_URL + q);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;

    // Catch and put in Error component
    throw new Error(message);
  }

  return response.json();
<<<<<<< HEAD
};
=======
};
>>>>>>> f9b79737be8b2bca6e2ad8fce129741b0b92357e
