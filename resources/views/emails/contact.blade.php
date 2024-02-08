<div>
{{$request->user_name}}様
<p>お問い合わせ頂きましてありがとうございます<br>
以下の内容でお問い合わせを受け付けました｡<br>
返信には数日頂く可能性があること､予めご了承頂けると幸いです｡</p>


<p>お問い合わせ内容</p>
<blockquote>
<p>
お名前: {{$request->user_name}} <br>
件名: {{$request->subject}} <br>
内容: {{$request->content}} <br>
</p>
</blockquote>

<p>------------------------------</p>
<p>下灘商店</p>
<p>https://shimonada-shoten.com/</p>
<p>土日祝日PM12:00-日没</p>
<p>------------------------------</p>

</div>
