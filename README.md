


# Shopoholic

Shopohoilc is an e-commerce platform built with ReactJS, npm, and Firebase. It allows users to browse and purchase products from a variety of categories.

## Features

* Browse products by category
* Add products to a shopping cart
* Check out and pay for products
* Track order status

## Getting Started

To get started with Shopoholc, you will need to:

1. Install Node.js and npm
2. Clone the Shopoholc repository
3. Install the dependencies
4. Run the development server

## Environment Configuration

Shopoholic uses Firebase for backend services, and to set up your development environment, you'll need to create an environment configuration file with your Firebase API key.

Follow these steps:

1. In the root directory of the project, create a new file named `.env.local`.

2. Open the `.env.local` file in a text editor.

3. Add your Firebase configuration information, including your API key, like this:

    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

   Replace `your_api_key`, `your_auth_domain`, etc., with your actual Firebase project details.

4. Save the file.

Now, your development environment is configured to work with Firebase services.


## Development

Shopoholc is developed using the Create React App framework. This makes it easy to get started with development and to run the project locally.

To run the development server, simply run the following command from the project root directory:

npm start


This will start the development server on port 3000. You can then access the project in your browser at http://localhost:3000.

## Deployment

Shopoholc can be deployed to a variety of hosting platforms, such as Heroku, Netlify, and AWS.

To deploy Shopoholc to Heroku, you can use the following command:


heroku create my-shopoholc
git push heroku master


This will create a new Heroku app and deploy the Shopoholc code to it.

## Contributing

Contributions are welcome! Please open a pull request if you have any changes or improvements to make.

## License

Shopoholc is licensed under the MIT License.


I hope this helps!
