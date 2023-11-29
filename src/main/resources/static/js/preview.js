const imageInput = document.getElementById('imageFile');
const imagePreview = document.getElementById('imagePreview');

//idに"imageFile"が指定されているHTML要素の値が変更されるたびに、イベント処理が実行される
//imageFileの要素には画像ファイルを選択するためのinput要素としている
imageInput.addEventListner('change', () => {
	if (imageInput.files[0]){

		//選択された画像ファイルが正常に読み込まれたら、idに"imagePreview"が指定されているHTML要素の中に、
		//読み込まれた画像ファイルを表示するためのimg要素を挿入する
		let fileReader = new FileReader();
		fileReader.onload = () => {
			imagePerview.innerHTML = '<img src="${fileReader.result}" class="mb-3">';
		}
		fileReader.readAsDataURL(imageInput.files[0]);
	} else {

		//選択された画像ファイルがない場合、idに"imagePreview"が指定されているHTML要素の中身を空にする
		imagePerview.innerHTML = '';
	}
})