<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<HEAD>
<TITLE>中国海洋大学——孙鑫的个人主页：坚持就是胜利！</TITLE>
<?php 	
	require_once("../db/DBConnection.php");
	?>
<?php  
$user_IP = ($_SERVER["HTTP_VIA"]) ? $_SERVER["HTTP_X_FORWARDED_FOR"] : $_SERVER["REMOTE_ADDR"];  
$user_IP = ($user_IP) ? $user_IP : $_SERVER["REMOTE_ADDR"];  
connect_to_db();
$strsql="insert into WebAdd (Addr,status )values ('$user_IP',1)";

$result=mysql_query( $strsql);
if (!$result) {
    die('Invalid query: ' . mysql_error());
}
   mysql_close(); // 关闭连接
?>
<META http-equiv=Content-Type content="text/html; charset=gb2312">
<META content="SUN, Xin" name=author>
<META content="Personal Homepage" name=description>
<META content="Personal Homepage" name=classification>
</HEAD>
<BODY text=black vLink=#800080 aLink=#FF0000 link=#0000FF bgColor=white>
<A name="Main">

<table width="888" border="0" align="center">
  <tr>
    <td width="504" height="49"><font face="Times New Roman" size="10"><a name="Xin" id="Xin"></a><font size="7"><strong>孙 鑫</strong></font></font></td>
    <td width="150"><a href="../">English</a></td>
    <td width="220" rowspan="5"><div align="center"><img src="../pic/image001.jpg" width="141" height="186" /></div></td>
  </tr>
  <tr>
    <td height="31" colspan="2"><font size="4">博士，讲师，硕士生导师</font></td>
  </tr>
  <tr>
    <td height="35" colspan="2"><font size="4">计算机科学与技术系，信息科学与工程学院， <a href="http://www.ouc.edu.cn" target="_blank" class="STYLE19">中国海洋大学</a></font> </td>
  </tr>
  <tr>
    <td height="32" colspan="2"><span ><font size="4">邮箱: </font>  <span ><a href="mailto: sunxin@ouc.edu.cn">sunxin@ouc.edu.cn</a>; </span><a href="mailto: sunxin1984@ieee.org">sunxin1984@ieee.org</a></span></td>
  </tr>
  <tr>
    <td height="33" colspan="2"><span ><font size="4">地址:</font>	<font size="4">山东省青岛市松岭路238号</font></span></td>
  </tr>
</table>
<table width="888" border="0" align="center">
  <tr>
    <td width="155" height="34"><font size="4">[<a href="index.html">个人信息</a>]</font></td>
    <td width="159"><font size="4">[<a href="research.html">研究兴趣</a>]</font></td>
    <td width="162"><font size="4">[<a href="publications.html">论文/专利</a>]</font></td>
    <td width="153"><font size="4">[<a href="project.html">科研项目</a>]</font></td>
    <td width="119"><font size="4">[<a href="course.html">教学信息</a>]</font></td>
    <td width="114"><div align="right" ><font size="4">[<a href="students.html">学生培养</a>]</font></div></td>
  </tr>
</table>
<hr size=2 width="888" align=center /> 
<table width="888" border="0" align="center">
   <tr>
     <td height="34"><A name=Education><FONT face="Times New Roman" size="4"><B>工作经历</B></FONT></A> </td>
   </tr>
</table>
<table width="855" border="0" align="center" cellspacing="0">
    <TR>
    <TD width="168" height="40">2013.08－今</TD>
    <TD width="545"><a href="http://www.jlu.edu.cn/">中国海洋大学</a>&nbsp;&nbsp;&nbsp;&nbsp;
		  <a href="http://ccst.jlu.edu.cn/">信息科学与工程学院</a> &nbsp;&nbsp;&nbsp;&nbsp;计算机科学与技术系<BR></TD>
    <TD width="136">讲师</TD>
  </TR>
</TABLE>
<table width="888" border="0" align="center">
   <tr>
     <td height="34"><A name=Education><FONT face="Times New Roman" size="4"><B>教育经历</B></FONT></A> </td>
   </tr>
</table>
 <table width="855" border="0" align="center" cellspacing="0">
  <TR><TD width="1%" rowSpan=10></TD>
  </TR>  
  <TR>
    <TD width="19%" height="34">2003.09－2007.06</TD>
    <TD width="34%"><a href="http://www.jlu.edu.cn/">吉林大学</a> <a href="http://ccst.jlu.edu.cn/">计算机科学与技术学院</a></TD>    
    <TD width="30%">导师：<a href="http://ccst.jlu.edu.cn/teacher/findDoctorById.action?doctor.id=4028818a31f950ae0131f97d896a0009">刘衍珩</a>教授</TD>
    <TD width="16%">本科生/理学学士</TD>
  </TR>
  <TR>
    <TD height="32">2007.09－2010.06</TD>
    <TD><a href="http://www.jlu.edu.cn/">吉林大学</a>
		<a href="http://ccst.jlu.edu.cn/">计算机科学与技术学院</a></TD>
    <TD> 导师：<a href="http://ccst.jlu.edu.cn/teacher/findDoctorById.action?doctor.id=4028818a31f950ae0131f97d896a0009">刘衍珩</a>教授<br /></TD>
    <TD>研究生/工学硕士</TD>
  </TR>
  <TR>
    <TD height="50">2010.09－2013.06</TD>
    <TD><p><a href="http://www.jlu.edu.cn/">吉林大学</a>
      <a href="http://ccst.jlu.edu.cn/">计算机科学与技术学院</a></p>
      <p><a href="http://www.uef.fi/">东芬兰大学</a> <a href="http://cs.uef.fi/">计算机学院</a><BR>
        </p></TD>
    <TD><p>导师：<a href="http://ccst.jlu.edu.cn/teacher/findDoctorById.action?doctor.id=4028818a31f950ae0131f97d896a0009">刘衍珩</a>教授</p>
    <p>导师：<a href="http://cs.joensuu.fi/pages/franti/">Pasi Fr&auml;nti</a>教授</p></TD>
    <TD><p>研究生/工学博士</p>
    <p>联合培养</p></TD>
  </TR>
    <TR>
    <TD height="40">2013.09－今</TD>
    <TD><a href="http://www.jlu.edu.cn/">中国海洋大学</a>
		<a href="http://ccst.jlu.edu.cn/">信息科学与工程学院</a><BR></TD>
    <TD>导师：<a href="http://it.ouc.edu.cn/visionlab/">董军宇</a>教授</TD>
    <TD>博士后</TD>
  </TR>
</TABLE>
<hr size=2 width="888" align=center /> 
<table width="888" height="71" border="0" align="center">
   <tr>
   
   
     <td><div align="center" class="STYLE90">Copyright @2014, Last modified: 2014-08-16</div> 
       <div align="center">
         <!-- Histats.com START (standard)--> 
         <script type="text/javascript">document.write(unescape("%3Cscript src=%27http://s10.histats.com/js15.js%27 type=%27text/javascript%27%3E%3C/script%3E"));</script> 
         <a href="http://www.histats.com" target="_blank" title="free hit counter" >
           <script type="text/javascript" > try {Histats.start(1,2109302,4,26,190,115,"00010000"); Histats.track_hits();} catch(err){}; </script>
         </a> 
         <noscript>
           <a href="http://www.histats.com" target="_blank"><img src="http://sstatic1.histats.com/0.gif?2109302&101" alt="free hit counter" border="0"></a>
         </noscript>
       </div>
     <!-- Histats.com END --></td>
   </tr>
</table>

</BODY>
</html>
