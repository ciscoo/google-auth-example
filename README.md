## google-auth-example

1. In your browser, navigate to `/auth/google`. This should redirect you to a Google OAuth2 screen.
2. After you login, you should get a token response from Google as shown below:

```json
{
    "access_token": "...",
    "token_type": "Bearer",
    "id_token": "...",
    "expiry_date": 1531790984450
}
```
