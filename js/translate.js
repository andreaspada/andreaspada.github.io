// preparing language file
var aLangKeys=new Array();
aLangKeys['en']=new Array();
aLangKeys['it']=new Array();
aLangKeys['pt']=new Array();
//
// strings
//
// english
aLangKeys['en']['menu-about']='About';
aLangKeys['en']['menu-contact']='Contact';
aLangKeys['en']['welcome']='Welcome';
aLangKeys['en']['welcome-sub']='My new site is coming soon!';
aLangKeys['en']['welcome-txt']='I`m a maker and restorer of fine string instruments. I`m quite specialised in Double Basses, however I work with the whole strings family, from Violins to Viols.';
aLangKeys['en']['more']='Tell me more';
aLangKeys['en']['about']='About';
aLangKeys['en']['about-sub']='Here`s a little about what I`m up to.';
aLangKeys['en']['about-txt']='As I`m very busy quite now, I had to postpone the overhauling of the new site. Till there, you can safely browse my legacy website, <a href="http://old.andreaspada.com">old.andreaspada.com</a>.	It`s not updated by a while, so you can easily miss something if you are searching for information on latest news in regard my work.<br>Hovewer, you`ll find precious insight about my workmanship and information about many of the model I offer.<br>You can always stay uptodate with my work on <a href="https://www.facebook.com/liuteriadautore/">facebook</a>.<br><br>Beside basses, cellos and alike, you`ll find as well information about my <a href="https://www.facebook.com/contrabassetto/"><b>Contrabassettos</b></a>, a special kind of instrument I invented and developed during the last ten years, which are devoted to the travelling double bassist.<br><br>I`m glade you visited my site, so if you have some question, you can contact me though some social links - upper right corner... - or using my contact information, in the <a href="#contact">contact</a> page. Thank you!';
aLangKeys['en']['contact']='Contact'
aLangKeys['en']['contact-sub']='Get in touch.'
aLangKeys['en']['phone']='Phone'
//
// italian
aLangKeys['it']['menu-about']='Informazioni';
aLangKeys['it']['menu-contact']='Contatto';
aLangKeys['it']['welcome']='Benvenuto';
aLangKeys['it']['welcome-sub']='Il mio nuovo sito é quasi pronto!';
aLangKeys['it']['welcome-txt']='Sono un liutaio, costruisco e restauro strumenti ad arco. Sono specializzato nei Contrabbassi, ma lavoro con tutti i membri della famiglia, dai Violini alle Viole da Gamba';
aLangKeys['it']['more']='Continua';
aLangKeys['it']['about']='Informazioni';
aLangKeys['it']['about-sub']='Qualche notizia su di me e sul mio lavoro...';
aLangKeys['it']['about-txt']='Giá che sono molto occupato al momento, ho dovuto rimandare la rinnovazione del mio sito. Fintanto che non è pronto, puoi sfogarti sul mio sito antico, <a href="http://old.andreaspada.com">old.andreaspada.com</a>.	È da molto che non lo attualizzo, quindi potrai sentire mancanza di notizie aggiornate, soprattutto se stai cercando informazioni sui miei ultimi lavori, ma e utile per informarsi sul mio metodo, concetto e modelli. <br>Puoi comunque rimanere aggiornato su <a href="https://www.facebook.com/liuteriadautore/">facebook</a>...<br><br>Olre a bassi, violoncelli e altri, trovi informazioni sui <a href="https://www.facebook.com/contrabassetto/"><b>Contrabassetti</b></a>, uno speciale tipo di stumento che ho inventato e sviluppato negli ultimi dieci anni, dedicato al contrabassista itinerante.<br><br>Se hai bosogno di ulteriori informazioni, entra in contatto usando le reti sociali - in alto a destra... - o dalla pagina di <a href="#contact">contatto</a>. Grazie!';
aLangKeys['it']['contact']='Contatto'
aLangKeys['it']['contact-sub']='Per maggiori informazioni:'
aLangKeys['it']['phone']='Cel'
//
// portugues
aLangKeys['pt']['menu-about']='Informações';
aLangKeys['pt']['menu-contact']='Contato';
aLangKeys['pt']['welcome']='Bem-vindo';
aLangKeys['pt']['welcome-sub']='O meu novo site está a caminho!';
aLangKeys['pt']['welcome-txt']='Sou um luthier, construo e restauro instrumentos de cordas. Sou expecializado em Contrabaixos, mas trabalho com todos os membros da famílha, do Violino à Viola da Gamba';
aLangKeys['pt']['more']='Continua';
aLangKeys['pt']['about']='Informações';
aLangKeys['pt']['about-sub']='Algumas notícias sobre mim e meu trabalho...';
aLangKeys['pt']['about-txt']='Estou muito ocupado no momento, portanto precisei adiar a renovação do meu site. Até ficar pronto, pode visitar meu site antigo, <a href="http://old.andreaspada.com">old.andreaspada.com</a>. Faz muito tempo que não o atualizo, portanto vai sentir falta de informações mais atuais sobre meus últimos trabalhos, mas é útil mesmo assim para conhecer mais sobre meu método, conceito e modelos.<br>Pode ficar atualizado su <a href="https://www.facebook.com/liuteriadautore/">facebook</a>...<br><br>Além de baixos, cellos e outros, encontra informações sobre meus <a href="https://www.facebook.com/contrabassetto/"><b>Contrabassettos</b></a>, um especial instrumento que inventei e desenvolvi nos últimos dez anos, dedicado ao contrabaixista itinerante.<br><br>Obrigado pela visita! Se precisar de maiores informações, entra em contato através das redes sociais - em cima, à direita... - ou de minha página de <a href="#contact">contato</a>. Até logo!';
aLangKeys['pt']['contact']='Contato'
aLangKeys['pt']['contact-sub']='Para maiores informações:.'
aLangKeys['pt']['phone']='Cel'
//
//
$(document).ready(function() {
// onclick behavior
$('.lang').click( function() {
var lang = $(this).attr('id'); // obtain language id
// translate all translatable elements
$('.tr').each(function(i){
$(this).html(aLangKeys[lang][ $(this).attr('key') ]);
});
} );
});
