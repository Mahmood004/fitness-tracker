import { NgModule } from '@angular/core';
import { TestingComponent } from './testing.component';
import { FooComponent } from './foo/foo.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
  ],
  declarations: [TestingComponent, FooComponent, IndexComponent],
  exports: [TestingComponent, FooComponent, IndexComponent]
})
export class TestingModule { }
