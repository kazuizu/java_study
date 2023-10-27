package com.example.samuraitravel.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


/**
 * @GetMapping
 * コントローラーのメソッド内にHTTPリクエストのGETメソッドをマッピング(対応付け)
 * 引数にはマッピングするルートパス(ドメイン名を省略したパス)を指定する
 * HTTPメソッドの種類(GET,POST,PUT,PATCH,DELETEなど)
 * @author kazui
 *
 */
@Controller
public class HomeController {


	@GetMapping("/")
	public String index() {

		//呼び出すビューの名前をreturnで返す(拡張子の.htmlは省略する)
		return "index";
	}

}
