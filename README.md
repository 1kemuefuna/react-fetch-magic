# React Fetch Magik

React Fetch Magik is a TypeScript-based React package that simplifies making HTTP requests using the JavaScript Fetch API. It provides a custom hook, `useFetchMagik`, along with `FetchMagikContext` and `FetchMagikProvider` components, which allow you to easily perform HTTP requests and set site-wide configurations within your React components.

## Features

- `useFetchMagik`: The core hook that handles making HTTP requests. It returns a function, `makeRequest`, to initiate requests, and an object, `makeRequestQuery`, containing the request status (loading, error, data).

- `FetchMagikContext` and `FetchMagikProvider`: The context and provider components to set site-wide values like baseURL and headers. They enable you to define common configurations that will be used by all requests.

## Installation

To install React Fetch Magik, use npm or yarn:

```bash
npm install react-fetch-magik

# or

yarn add react-fetch-magik
```

## Usage

1. Import the `useFetchMagik`, `FetchMagikContext`, and `FetchMagikProvider`:

```javascript
import { useFetchMagik, FetchMagikContext, FetchMagikProvider } from 'react-fetch-magik';
```

2. Use the `FetchMagikProvider` component to set the site-wide configurations such as baseURL and headers:

```javascript
<FetchMagikProvider baseURL="https://api.example.com" headers={{ Authorization: 'Bearer token' }}>
  {/* Your app components */}
</FetchMagikProvider>
```

3. Use the `useFetchMagik` hook to perform HTTP requests within your components:

```javascript
const [makeRequest, makeRequestQuery] = useFetchMagik();

// Trigger a GET request
makeRequest({ url: '/users' });

// Access the request status
const { loading, error, data } = makeRequestQuery;

// Render based on the request status
if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error.message}</div>;
}

if (data) {
  // Render the fetched data
  return <div>Data: {JSON.stringify(data)}</div>;
}

// Render the initial state
return <div>Make a request to fetch data</div>;
```

4. You can also override the site-wide configurations on a per-request basis:

```javascript
makeRequest({ url: '/posts', headers: { 'Content-Type': 'application/json' } });
```

That's it! You can now easily make HTTP requests and manage the request state using React Fetch Magik in your React applications.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/1kemuefuna/react-fetch-magik/blob/main/LICENSE "LICENSE") file for details.
