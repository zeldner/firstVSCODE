<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication1.WebForm1" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>Example</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Literal runat="server" ID="header"></asp:Literal>
            <h2></h2>
            <script>
                let h2 = document.querySelector('h2')
                h2.innerText = 'Hello ORT! - from JS!'
            </script>
        </div>
    </form>
</body>
</html>
