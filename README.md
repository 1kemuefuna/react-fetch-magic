# React Fetch Magic

React Fetch Magic is a TypeScript-based React package that simplifies making HTTP requests using the JavaScript Fetch API. It provides a custom hook, `useFetchMagic`, along with `FetchMagicContext` and `FetchMagicProvider` components, which allow you to easily perform HTTP requests and set site-wide configurations within your React components.

## Features

- `useFetchMagic`: The core hook that handles making HTTP requests. It returns a function, `makeRequest`, to initiate requests, and an object, `makeRequestQuery`, containing the request status (loading, error, data).

- `FetchMagicContext` and `FetchMagicProvider`: The context and provider components to set site-wide values like baseURL and headers. They enable you to define common configurations that will be used by all requests.

## Installation

To install React Fetch Magic, use npm or yarn:

```bash
npm install react-fetch-magic

# or

yarn add react-fetch-magic
```

## Usage

1. Import the `useFetchMagic`, `FetchMagicContext`, and `FetchMagicProvider`:

```javascript
import { useFetchMagic, FetchMagicContext, FetchMagicProvider } from 'react-fetch-magic';
```

2. Use the `FetchMagicProvider` component to set the site-wide configurations such as baseURL and headers:

```javascript
<FetchMagicProvider baseURL="https://api.example.com" headers={{ Authorization: 'Bearer token' }}>
  {/* Your app components */}
</FetchMagicProvider>
```

3. Use the `useFetchMagic` hook to perform HTTP requests within your components:

```javascript
const [makeRequest, makeRequestQuery] = useFetchMagic();

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

That's it! You can now easily make HTTP requests and manage the request state using React Fetch Magic in your React applications.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/1kemuefuna/react-fetch-magic/blob/main/LICENSE "LICENSE") file for details.
