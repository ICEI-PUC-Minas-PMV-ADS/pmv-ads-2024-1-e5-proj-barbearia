<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recuperação de Senha - Barbearia Vintage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 30px;
        }
        h2 {
            color: #333333;
            margin-bottom: 20px;
        }
        p {
            color: #666666;
            line-height: 1.6;
        }
        .token {
            background-color: #007bff;
            color: #ffffff;
            font-weight: bold;
            padding: 10px 20px;
            border-radius: 5px;
            display: inline-block;
            margin-top: 20px;
        }
        @media screen and (max-width: 600px) {
            .container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container" style="">
        <img src="{{ public_path('img/logo-vintage.jpg') }}" alt="Barbearia Vintage Logo" style="max-width: 100%; margin-bottom: 20px;">
        <h2>Recuperação de Senha - Barbearia Vintage</h2>
        <p>Olá,</p>
        <p>Recebemos uma solicitação para redefinir a senha da sua conta na Barbearia Vintage. Use o código abaixo para redefinir sua senha:</p>
        <div class="token">{{ $token }}</div>
        <p>Se você não solicitou essa redefinição de senha, pode ignorar este e-mail.</p>
        <p>Atenciosamente,<br>Equipe da Barbearia Vintage</p>
    </div>
</body>
</html>
