import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

export default class Banner extends WidgetBase {
	protected render() {
		return v('h1', { title: 'I am a title!' }, [ 'Welcome To Biz-E-Bodies' ]);
	}
}
